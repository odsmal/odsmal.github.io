(() => {
  const historyTable = document.getElementById('history-table');
  const eraFilter = document.getElementById('era-filter');
  const resetButton = document.getElementById('history-reset');
  const historyStatus = document.getElementById('history-status');

  if (historyTable && eraFilter && resetButton && historyStatus) {
    const body = historyTable.tBodies[0];
    const rows = [...body.rows];
    const sortButtons = [...historyTable.querySelectorAll('thead button[data-sort]')];
    const labels = { date: 'date', milestone: 'milestone', medium: 'medium' };
    let sortKey = 'date';
    let direction = 'ascending';

    function rowValue(row, key) {
      const value = row.dataset[`sort${key[0].toUpperCase()}${key.slice(1)}`] || '';
      return key === 'date' ? Number(value) : value.toLocaleLowerCase('en');
    }

    function updateSortHeaders() {
      sortButtons.forEach(button => {
        const header = button.closest('th');
        const mark = button.querySelector('.sort-mark');
        const active = button.dataset.sort === sortKey;
        if (active) {
          header.setAttribute('aria-sort', direction);
          mark.textContent = direction === 'ascending' ? '▲' : '▼';
          button.setAttribute('aria-label', `Sort by ${labels[sortKey]}. Currently ${direction}; activate for ${direction === 'ascending' ? 'descending' : 'ascending'} order.`);
        } else {
          header.removeAttribute('aria-sort');
          mark.textContent = '◇';
          button.setAttribute('aria-label', `Sort by ${labels[button.dataset.sort]}.`);
        }
      });
    }

    function applyHistoryView() {
      const ordered = [...rows].sort((a, b) => {
        const first = rowValue(a, sortKey);
        const second = rowValue(b, sortKey);
        const result = typeof first === 'number' ? first - second : first.localeCompare(second);
        return direction === 'ascending' ? result : -result;
      });

      ordered.forEach(row => {
        row.hidden = eraFilter.value !== 'all' && row.dataset.era !== eraFilter.value;
        body.append(row);
      });

      updateSortHeaders();
      const visibleCount = ordered.filter(row => !row.hidden).length;
      const filterLabel = eraFilter.options[eraFilter.selectedIndex].text;
      const orderLabel = direction === 'ascending' ? 'ascending' : 'descending';
      const nextStatus = `${visibleCount} ${visibleCount === 1 ? 'milestone' : 'milestones'} shown${eraFilter.value === 'all' ? '' : ` · ${filterLabel}`} · sorted by ${labels[sortKey]}, ${orderLabel}.`;
      if (historyStatus.textContent !== nextStatus) historyStatus.textContent = nextStatus;
    }

    sortButtons.forEach(button => {
      button.addEventListener('click', () => {
        const nextKey = button.dataset.sort;
        if (sortKey === nextKey) direction = direction === 'ascending' ? 'descending' : 'ascending';
        else {
          sortKey = nextKey;
          direction = 'ascending';
        }
        applyHistoryView();
      });
    });

    eraFilter.addEventListener('change', () => applyHistoryView());
    resetButton.addEventListener('click', () => {
      sortKey = 'date';
      direction = 'ascending';
      eraFilter.value = 'all';
      applyHistoryView();
      eraFilter.focus();
    });

    applyHistoryView();
  }

  const taskSelect = document.getElementById('task-select');
  const shapeSelect = document.getElementById('shape-select');
  const decisionResult = document.getElementById('decision-result');

  if (taskSelect && shapeSelect && decisionResult) {
    const recommendations = {
      table: { icon: '▦', title: 'Use a data table', copy: 'Repeated fields and exact comparison support a table. Preserve semantic structure and add only required sorting or filtering.' },
      searchTable: { icon: '⌕', title: 'Use a searchable table or directory', copy: 'Repeated records support filtering and scanning. Place the primary identifier first and keep active criteria visible.' },
      chart: { icon: '▥', title: 'Use a chart', copy: 'Charts communicate trends and distributions. Provide an accessible table when exact values are also required.' },
      prose: { icon: '¶', title: 'Use prose or a structured list', copy: 'Narrative content requires sequence and hierarchy rather than two-dimensional comparison.' },
      grid: { icon: '⊞', title: 'Use an editable data grid', copy: 'High-volume editing may require spreadsheet-style navigation. Implement complete keyboard, focus, validation, and recovery behavior.' },
      form: { icon: '▤', title: 'Use a form or task workspace', copy: 'Mixed records do not support a stable column model. Present the fields and validation required by each task.' },
      tree: { icon: 'Y', title: 'Use a tree or relationship view', copy: 'Hierarchy requires parent, child, depth, and path relationships. A table may provide a secondary reference.' },
      cards: { icon: '▦', title: 'Use cards or a results list', copy: 'Items with different structures benefit from summaries and progressive disclosure rather than inconsistent columns.' },
      compact: { icon: '≡', title: 'Use a compact comparison list', copy: 'One or two comparisons do not require a full table. Pair labels directly with their values.' }
    };

    function chooseRecommendation() {
      const task = taskSelect.value;
      const shape = shapeSelect.value;
      let key = 'table';

      if (task === 'trend') key = 'chart';
      else if (task === 'explain') key = 'prose';
      else if (task === 'hierarchy') key = 'tree';
      else if (shape === 'tiny') key = 'compact';
      else if (shape === 'mixed' && task === 'edit') key = 'form';
      else if (shape === 'mixed') key = 'cards';
      else if (task === 'edit') key = 'grid';
      else if (task === 'find') key = 'searchTable';

      const recommendation = recommendations[key];
      decisionResult.innerHTML = `<span class="decision-icon" aria-hidden="true">${recommendation.icon}</span><div><strong>${recommendation.title}</strong><p>${recommendation.copy}</p></div>`;
    }

    taskSelect.addEventListener('change', chooseRecommendation);
    shapeSelect.addEventListener('change', chooseRecommendation);
    chooseRecommendation();
  }

  document.querySelectorAll('#history-table thead button[data-sort]').forEach(button => { button.disabled = false; });
  document.documentElement.classList.add('tables-history-ready');
})();
