const goalData = {
      compare:{ title:'Comparison workspace', cards:[['Criteria','Editable weights and required criteria'],['Options','Three aligned comparison cards'],['Differences','Relevant differences highlighted'],['Decision','Record rationale or request additional information']] },
      plan:{ title:'Plan workspace', cards:[['Outcome','Editable definition of done'],['Sequence','Ordered steps with dependencies'],['Checkpoints','Questions and approval boundaries'],['Recovery','Pause, revise, and restore controls']] },
      explain:{ title:'Explanation workspace', cards:[['Overview','Concise conceptual summary'],['Layers','Progressively disclosed detail'],['Evidence','Sources beside the claims they support'],['Questions','Defined paths for further investigation']] },
      review:{ title:'Review workspace', cards:[['Summary','What the proposal changes'],['Diff','Before and after in context'],['Risk','Consequences and unresolved assumptions'],['Decision','Approve, request edits, or reject']] }
    };
    const goalSelect = document.getElementById('goal-select');
    const constraintButtons = [...document.querySelectorAll('.constraint-button')];
    const composerStage = document.getElementById('composer-stage');
    function updateComposer() {
      const data = goalData[goalSelect.value];
      const constraints = constraintButtons.filter(button => button.getAttribute('aria-pressed') === 'true').map(button => button.textContent);
      composerStage.innerHTML = `<div class="stage-header"><div><span>Generated from trusted components</span><br><strong>${data.title}</strong></div><span>${constraints.length ? constraints.join(' · ') : 'No additional constraints'}</span></div><div class="generated-grid">${data.cards.map(card => `<div class="generated-card"><strong>${card[0]}</strong><span>${card[1]}</span></div>`).join('')}</div>`;
    }
    goalSelect.addEventListener('change', updateComposer);
    constraintButtons.forEach(button => button.addEventListener('click', () => { button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true')); updateComposer(); }));
    updateComposer();

    const delegationStage = document.getElementById('delegation-stage');
    const delegationData = {
      suggest:{ title:'Recommendation only', note:'No external change is made.', steps:[['Inspect','Read the stated goal and available context'],['Recommend','Present three possible approaches'],['User action','The user selects and performs the action']] },
      draft:{ title:'Prepare a draft', note:'Creates an editable artifact; no external side effect.', steps:[['Inspect','Read allowed sources'],['Prepare','Build a draft and show assumptions'],['Review','User edits, exports, or discards the artifact']] },
      approve:{ title:'Act after approval', note:'Stops immediately before the consequential step.', steps:[['Plan','Show scope, recipients, data, and tools'],['Prepare','Complete reversible setup work'],['Approval gate','Describe the exact side effect and wait'],['Receipt','Record the result and provide recovery']] }
    };
    function updateDelegation() {
      const value = document.querySelector('input[name="delegation"]:checked').value;
      const data = delegationData[value];
      delegationStage.innerHTML = `<div class="stage-header"><div><span>Authority</span><br><strong>${data.title}</strong></div><span>${data.note}</span></div><ol class="plan">${data.steps.map(step => `<li><span class="step-state">${step[0]}</span><span>${step[1]}</span></li>`).join('')}</ol>`;
    }
    document.querySelectorAll('input[name="delegation"]').forEach(input => input.addEventListener('change', updateDelegation));
    updateDelegation();

    let selectedObject = 'blue notebook';
    const sceneObjects = [...document.querySelectorAll('.scene-object')];
    const phraseSelect = document.getElementById('phrase-select');
    const referentResult = document.getElementById('referent-result');
    function updateReferent() {
      const phrase = phraseSelect.options[phraseSelect.selectedIndex].text;
      referentResult.innerHTML = `<strong>Resolved referent: ${selectedObject}</strong><p>Phrase: “${phrase}.” Evidence: explicit selection in the shared scene. Confidence: high. Conflicting gaze, pointer, or contextual signals require explicit clarification.</p>`;
    }
    sceneObjects.forEach(button => button.addEventListener('click', () => { selectedObject = button.dataset.object; sceneObjects.forEach(item => item.setAttribute('aria-pressed', String(item === button))); updateReferent(); }));
    phraseSelect.addEventListener('change', updateReferent);
    updateReferent();

    const distanceRange = document.getElementById('distance-range');
    const distanceOutput = document.getElementById('distance-output');
    const distanceWidget = document.getElementById('distance-widget');
    const distanceResult = document.getElementById('distance-result');
    const distances = [
      { key:'near', label:'Near', message:'Full detail and secondary actions are available at close reading distance.' },
      { key:'middle', label:'Middle', message:'The component becomes slightly more compact while retaining route-critical detail.' },
      { key:'far', label:'Far', message:'Only the essential state—train and on-time status—remains visually prominent. The complete semantic summary remains available to assistive technology.' }
    ];
    function updateDistance() {
      const distance = distances[Number(distanceRange.value)];
      distanceOutput.value = distance.label;
      distanceWidget.dataset.distance = distance.key;
      distanceResult.innerHTML = `<strong>${distance.label} view</strong><p>${distance.message}</p>`;
    }
    distanceRange.addEventListener('input', updateDistance);
    updateDistance();
