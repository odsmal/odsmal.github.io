function hexToRgb(hex) {
      const value = hex.replace('#', '');
      return [0, 2, 4].map(index => parseInt(value.slice(index, index + 2), 16));
    }
    function relativeLuminance(hex) {
      return hexToRgb(hex).map(value => value / 255).map(value => value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
    }
    function contrastRatio(first, second) {
      const values = [relativeLuminance(first), relativeLuminance(second)].sort((a, b) => b - a);
      return (values[0] + 0.05) / (values[1] + 0.05);
    }
    const foreground = document.getElementById('foreground');
    const background = document.getElementById('background');
    const contrastPreview = document.getElementById('contrast-preview');
    const contrastResult = document.getElementById('contrast-result');
    function statusChip(label, pass) { return `<span class="status ${pass ? 'pass' : 'fail'}"><span aria-hidden="true">${pass ? '✓' : '×'}</span>${label}: ${pass ? 'pass' : 'fail'}</span>`; }
    function updateContrast() {
      const ratio = contrastRatio(foreground.value, background.value);
      contrastPreview.style.color = foreground.value;
      contrastPreview.style.backgroundColor = background.value;
      contrastPreview.setAttribute('aria-label', `Dose readout preview. Contrast ratio ${ratio.toFixed(2)} to 1.`);
      contrastResult.innerHTML = `<strong>${ratio.toFixed(2)}:1 contrast</strong><p>A color pair may satisfy one requirement and fail another.</p><div class="status-list">${statusChip('Normal text AA', ratio >= 4.5)}${statusChip('Large text AA', ratio >= 3)}${statusChip('UI graphics', ratio >= 3)}</div>`;
    }
    foreground.addEventListener('input', updateContrast);
    background.addEventListener('input', updateContrast);
    document.querySelectorAll('.contrast-preset').forEach(button => button.addEventListener('click', () => { foreground.value = button.dataset.fg; background.value = button.dataset.bg; updateContrast(); }));
    updateContrast();

    const targetSize = document.getElementById('target-size');
    const targetSizeOutput = document.getElementById('target-size-output');
    const targetDot = document.getElementById('target-dot');
    const targetResult = document.getElementById('target-result');
    function updateTarget() {
      const size = Number(targetSize.value);
      targetSizeOutput.value = `${size} px`;
      targetDot.style.width = `${size}px`;
      targetDot.style.height = `${size}px`;
      targetDot.textContent = size;
      const aa = size >= 24, aaa = size >= 44;
      targetResult.innerHTML = `<strong>${size} × ${size} CSS pixels</strong><p>${aa ? 'Meets the basic AA target-size threshold, subject to documented exceptions and spacing.' : 'Does not meet the basic AA target-size threshold unless a documented exception applies.'}</p><div class="status-list">${statusChip('24 px AA', aa)}${statusChip('44 px AAA', aaa)}</div>`;
    }
    targetSize.addEventListener('input', updateTarget);
    updateTarget();

    const errorModes = document.querySelectorAll('.error-mode');
    const mockError = document.getElementById('mock-error');
    const errorResult = document.getElementById('error-result');
    function setErrorMode(mode) {
      errorModes.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
      if (mode === 'weak') {
        mockError.innerHTML = '<span>The border changes color.</span>';
        errorResult.innerHTML = '<strong>Insufficient error feedback</strong><p>Color alone does not identify the error, explain the cause, or provide a recovery action. Users with limited color perception may not detect it.</p>';
      } else {
        mockError.innerHTML = '<span class="error-icon">!</span><span>Use digits only. Check whether “10O” should be “100”, then try again.</span>';
        errorResult.innerHTML = '<strong>Explicit and actionable error feedback</strong><p>The message identifies the problem and corrective action. The icon and text avoid reliance on color, and the error must be programmatically associated with its field.</p>';
      }
    }
    errorModes.forEach(button => button.addEventListener('click', () => setErrorMode(button.dataset.mode)));
    setErrorMode('clear');

    const riskData = {
      contrast: ['User with low vision reviews a dose summary', 'The value and unit blend into the panel', 'A higher dose is accepted than intended', 'The incorrect dose is prepared or administered', 'Overdose and related clinical harm', 'Increase contrast, separate value and unit, add review and independent verification where risk warrants'],
      focus: ['Keyboard user configures a therapy session', 'A focused setting is hidden behind a sticky help panel', 'A required setting is skipped or changed without awareness', 'Therapy begins with an unintended configuration', 'Ineffective therapy or patient injury', 'Keep focus visible, manage overlays, preserve reading order, and verify the full keyboard workflow'],
      target: ['User with tremor confirms an infusion setting', 'The confirmation target is too small or crowded', 'An adjacent cancel or value control is activated', 'Treatment is delayed or the wrong setting remains active', 'Delayed therapy or unintended delivery', 'Enlarge and separate targets, add a clear review state, and test in realistic motor and environmental conditions'],
      drag: ['Clinician reorders medication steps using keyboard or limited dexterity', 'Reordering is available only by dragging', 'The intended sequence cannot be created or is created incorrectly', 'Steps are carried out in the wrong order', 'Reduced treatment effectiveness or adverse interaction', 'Provide Move up/down controls and keyboard support; verify the saved sequence and critical-task outcome'],
      auth: ['Patient with a cognitive disability tries to access urgent instructions', 'Login requires a memory or object-recognition puzzle', 'Authentication fails or is abandoned', 'Needed instructions or monitoring data are unavailable', 'Delay in action or missed escalation', 'Support password managers and paste, and offer an accessible alternative while controlling unauthorized-access risk']
    };
    const riskLabels = ['User and task', 'Barrier', 'Possible use error', 'Hazardous situation', 'Potential harm', 'Possible controls'];
    const riskSelect = document.getElementById('risk-select');
    const riskChain = document.getElementById('risk-chain');
    function updateRisk() {
      riskChain.innerHTML = riskData[riskSelect.value].map((text, index) => `<li data-step="${index + 1}"><strong>${riskLabels[index]}</strong>${text}</li>`).join('');
    }
    riskSelect.addEventListener('change', updateRisk);
    updateRisk();
