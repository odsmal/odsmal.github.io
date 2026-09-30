(() => {
  function bindChoice(buttonSelector, attribute, apply) {
    const buttons = [...document.querySelectorAll(buttonSelector)];
    if (!buttons.length) return;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(candidate => candidate.setAttribute('aria-pressed', String(candidate === button)));
        apply(button.dataset[attribute]);
      });
    });
  }

  const toolbarDemo = document.getElementById('toolbar-demo');
  const toolbarResult = document.getElementById('toolbar-result');
  if (toolbarDemo && toolbarResult) {
    bindChoice('[data-toolbar-mode]', 'toolbarMode', mode => {
      const grouped = mode === 'grouped';
      toolbarDemo.classList.toggle('is-flat', !grouped);
      toolbarDemo.classList.toggle('is-grouped', grouped);
      toolbarResult.innerHTML = grouped
        ? '<strong>Semantic groups:</strong> each relationship container wraps intact, while the destructive action retains a separate boundary.'
        : '<strong>Independent buttons:</strong> wrapping places Delete beside Share, so proximity implies the wrong scope and class.';
    });
  }

  const taskTable = document.getElementById('task-table');
  const tableResult = document.getElementById('table-result');
  if (taskTable && tableResult) {
    bindChoice('[data-table-task]', 'tableTask', task => {
      const metric = task === 'metric';
      taskTable.classList.toggle('is-record-task', !metric);
      taskTable.classList.toggle('is-metric-task', metric);
      tableResult.innerHTML = metric
        ? '<strong>Metric task:</strong> continuous column emphasis supports vertical comparison without separating values from their row headers.'
        : '<strong>Record task:</strong> a bounded selected row keeps the service name, values, state, and any row actions together.';
    });
  }

  const workflowDemo = document.getElementById('workflow-demo');
  const workflowResult = document.getElementById('workflow-result');
  if (workflowDemo && workflowResult) {
    bindChoice('[data-workflow-mode]', 'workflowMode', mode => {
      const lanes = mode === 'lanes';
      workflowDemo.classList.toggle('is-crossed', !lanes);
      workflowDemo.classList.toggle('is-lanes', lanes);
      workflowResult.innerHTML = lanes
        ? '<strong>Aligned lanes:</strong> visible ports, separated channels, and orthogonal turns make every dependency traceable from source to destination.'
        : '<strong>Crossed routes:</strong> smooth continuation through the intersection suggests paths that are not present in the data.';
    });
  }

  const serviceMap = document.getElementById('service-map');
  const sharedEventButton = document.getElementById('shared-event-button');
  const refreshEventButton = document.getElementById('refresh-event-button');
  const motionResult = document.getElementById('motion-result');
  let clearMotion;

  function runMotion(kind) {
    if (!serviceMap || !motionResult) return;
    window.clearTimeout(clearMotion);
    serviceMap.classList.remove('is-shared-event', 'is-refresh-event');
    void serviceMap.offsetWidth;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (kind === 'shared') {
      serviceMap.classList.add('is-shared-event');
      motionResult.textContent = reduced
        ? 'Static emphasis identifies Identity and Checkout as members of the same EU incident.'
        : 'Identity and Checkout change together, so common fate reinforces their shared EU incident.';
    } else {
      serviceMap.classList.add('is-refresh-event');
      motionResult.textContent = reduced
        ? 'Static emphasis covers every service, creating no useful distinction between related and unrelated changes.'
        : 'Every service moves during the refresh, so common fate falsely implies that all four share one event.';
    }

    clearMotion = window.setTimeout(() => {
      serviceMap.classList.remove('is-shared-event', 'is-refresh-event');
    }, 1250);
  }

  if (sharedEventButton) sharedEventButton.addEventListener('click', () => runMotion('shared'));
  if (refreshEventButton) refreshEventButton.addEventListener('click', () => runMotion('refresh'));

  document.documentElement.classList.add('gestalt-principles-ready');
})();
