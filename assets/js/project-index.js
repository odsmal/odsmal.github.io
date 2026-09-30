const projects = [
      { entry:'01', published:'2026-09-25', title:'Emerging Interface Models in 2026', type:'article', href:'ux-frontier-2026.html', glyph:'↗', time:'11 min read', tools:'A2UI · MCP Apps · spatial UI', status:'Complete', color:'#cdd2ec', tilt:'3deg', summary:'An analysis of generative interfaces, agent-mediated interaction, multimodal input, and emerging spatial UI patterns.', detail:'Examines how interfaces are assembled around user intent, approval, recovery, and context-sensitive components.' },
      { entry:'02', published:'2026-09-25', title:'WCAG 2.2 and Medical Device Interface Safety', type:'report', href:'wcag-medical-device-ux.html', glyph:'A11Y', time:'14 min read', tools:'WCAG 2.2 · IEC 62366-1 · ISO 14971', status:'Complete', color:'#c7d1d5', tilt:'-3deg', summary:'An assessment of how WCAG 2.2 supports safety-focused usability engineering for medical devices.', detail:'Relates WCAG 2.2 to use-related risk, human-factors validation, IEC 62366-1, and ISO 14971.' },
      { entry:'03', published:'2026-09-27', title:'Website Design and Implementation Specification', type:'documentation', href:'website-specification.html', glyph:'SPEC', time:'Reference', tools:'HTML · CSS · JavaScript', status:'Complete', color:'#d5cbb8', tilt:'1deg', summary:'A reference for the site’s structure, components, states, behavior, and accessibility requirements.', detail:'Defines the shared terminology and implementation rules used to revise Blandat bös.' },
      { entry:'04', published:'2026-09-27', title:'Family Tree Visualization: History and Design', type:'visualization', href:'family-tree-visualization.html', glyph:'Y', time:'10 min read', tools:'HTML · CSS · JavaScript', status:'Complete', color:'#c8d2b5', tilt:'-2deg', summary:'A history of family-tree representations, from medieval diagrams and numbered pedigrees to interactive networks.', detail:'Examines how visual structures represent ancestry, descent, chronology, and relationships.' },
      { entry:'05', published:'2026-09-29', title:'Tables: History and Interface Design', type:'article', href:'tables-history-ux.html', glyph:'▦', time:'12 min read', tools:'History · data UX · interaction', status:'Complete', color:'#d8cfbb', tilt:'2deg', summary:'A history of tables, from early accounting and printed calculation to spreadsheets and interactive data grids.', detail:'Explains how tables became interactive and when they should be used in graphical interfaces.' }
    ];
    const state = { filter:'all', view:'cards' };
    const cardView = document.getElementById('card-view'), tableView = document.getElementById('table-view'), results = document.getElementById('results');
    const typeLabels = Object.freeze({ article:'Article', report:'Report', documentation:'Documentation', visualization:'Visualization' });
    const shortMonths = Object.freeze(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    function typeLabel(type) { return typeLabels[type] || 'Project'; }
    function publicationLabel(published) { const [year, month] = published.split('-'); return `${shortMonths[Number(month) - 1]} ${year}`; }
    function projectSlug(title) { return title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
    function projectHref(project) { return project.href || `project.html?project=${projectSlug(project.title)}`; }
    function filteredProjects() {
      return projects
        .filter(project => state.filter === 'all' || project.type === state.filter)
        .sort((a, b) => b.published.localeCompare(a.published) || Number(b.entry) - Number(a.entry));
    }
    function render() {
      const list = filteredProjects();
      results.textContent = `${String(list.length).padStart(2,'0')} entries found · sorted by most recent`;
      cardView.innerHTML = list.length ? list.map(p => `<a class="project-card" href="${projectHref(p)}" aria-labelledby="project-title-${p.entry}" aria-describedby="project-summary-${p.entry}"><div class="project-visual" style="--visual-bg:${p.color};--tilt:${p.tilt}" aria-hidden="true"><span class="project-number">${p.entry}</span><span class="project-type">${p.tag || typeLabel(p.type)}</span><span class="visual-glyph">${p.glyph}</span></div><div class="project-body"><h3 id="project-title-${p.entry}">${p.title}</h3><p id="project-summary-${p.entry}">${p.summary}</p><div class="project-footer" aria-hidden="true"><span>${publicationLabel(p.published)} · ${p.status}</span></div></div></a>`).join('') : '<p class="empty">No projects are available in this category.</p>';
      tableView.innerHTML = `<table><thead><tr><th scope="col">No.</th><th scope="col">Project</th><th scope="col">Kind</th><th scope="col">Published</th><th scope="col">Status</th></tr></thead><tbody>${list.map(p => `<tr><td class="table-number">${p.entry}</td><th scope="row" class="table-title"><a class="table-project-link" href="${projectHref(p)}">${p.title}</a></th><td class="table-kind"><span class="type-stamp">${typeLabel(p.type)}</span>${p.tag ? ` <span class="type-stamp">${p.tag}</span>` : ''}</td><td class="table-published">${publicationLabel(p.published)}</td><td class="table-status">${p.status}</td></tr>`).join('')}</tbody></table>`;
      cardView.classList.toggle('hidden', state.view !== 'cards'); tableView.classList.toggle('hidden', state.view !== 'table');
    }
    document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { state.filter = button.dataset.filter; document.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', String(b === button))); render(); }));
    document.getElementById('card-button').addEventListener('click', () => { state.view = 'cards'; document.getElementById('card-button').setAttribute('aria-pressed','true'); document.getElementById('table-button').setAttribute('aria-pressed','false'); render(); });
    document.getElementById('table-button').addEventListener('click', () => { state.view = 'table'; document.getElementById('card-button').setAttribute('aria-pressed','false'); document.getElementById('table-button').setAttribute('aria-pressed','true'); render(); });
    render();
