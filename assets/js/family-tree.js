(() => {
  const people = [
    { id:'alva', name:'Alva Nyberg', born:1878, died:1959, place:'Visby' },
    { id:'oskar', name:'Oskar Vale', born:1875, died:1948, place:'Visby' },
    { id:'ruth', name:'Ruth Vale', born:1902, died:1987, place:'Gothenburg' },
    { id:'samir', name:'Samir Haddad', born:1899, died:1971, place:'Gothenburg' },
    { id:'leona', name:'Leona Haddad Vale', born:1927, died:2012, place:'Gothenburg' },
    { id:'theo', name:'Theo Okafor', born:1924, died:1999, place:'Gothenburg' },
    { id:'august', name:'August Vale', born:1930, died:2005, place:'Stockholm' },
    { id:'clara', name:'Clara Sund', born:1932, died:2016, place:'Stockholm' },
    { id:'sofia', name:'Sofia Okafor Vale', born:1955, place:'Malmö' },
    { id:'kenji', name:'Kenji Mori', born:1953, place:'Malmö' },
    { id:'nora', name:'Nora Vale', born:1960, place:'Stockholm' },
    { id:'ren', name:'Ren Torres', born:1958, place:'Stockholm' },
    { id:'mira', name:'Mira Vale', born:1988, place:'Vinga' },
    { id:'noor', name:'Noor Reed', born:1987, place:'Vinga' },
    { id:'edda', name:'Edda Torres Vale', born:1991, place:'Uppsala' },
    { id:'liv', name:'Liv Reed Vale', born:2018, place:'Vinga' }
  ];

  const parentage = [
    ['alva','ruth','birth'], ['oskar','ruth','birth'],
    ['ruth','leona','birth'], ['samir','leona','birth'],
    ['ruth','august','birth'], ['samir','august','birth'],
    ['leona','sofia','birth'], ['theo','sofia','birth'],
    ['august','nora','birth'], ['clara','nora','birth'],
    ['sofia','mira','birth'], ['kenji','mira','birth'],
    ['nora','edda','birth'], ['ren','edda','birth'],
    ['mira','liv','adoptive'], ['noor','liv','adoptive']
  ];

  const partnerships = [
    ['alva','oskar'], ['ruth','samir'], ['leona','theo'],
    ['august','clara'], ['sofia','kenji'], ['nora','ren'],
    ['mira','noor']
  ];

  const peopleById = new Map(people.map(person => [person.id, person]));
  const parentsByChild = new Map();
  parentage.forEach(([parent, child, type]) => {
    if (!parentsByChild.has(child)) parentsByChild.set(child, []);
    parentsByChild.get(child).push({ id:parent, type });
  });

  const escapeHtml = value => String(value).replace(/[&<>'"]/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[character]));
  const years = person => `${person.born}–${person.died || ''}`;
  const firstName = person => person.name.split(' ')[0];
  const relationName = type => type === 'adoptive' ? 'adoptive parent' : 'birth parent';

  const focusSelect = document.getElementById('family-focus');
  const generationRange = document.getElementById('generation-depth');
  const generationOutput = document.getElementById('generation-output');
  const familyStage = document.getElementById('family-stage');
  const familyStatus = document.getElementById('family-status');
  const familyOutline = document.getElementById('family-outline');
  const viewButtons = [...document.querySelectorAll('.tree-view-choice')];

  let activeView = 'tree';
  let focusId = 'mira';

  const optionMarkup = people
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(person => `<option value="${person.id}">${escapeHtml(person.name)}</option>`)
    .join('');

  focusSelect.innerHTML = optionMarkup;
  focusSelect.value = focusId;

  function ancestorEntries(id, depth, maxDepth, incomingType = 'center', path = new Set()) {
    const person = peopleById.get(id);
    if (!person) return null;
    const current = { person, type:incomingType, depth, parents:[] };
    if (depth >= maxDepth || path.has(id)) return current;
    const nextPath = new Set(path);
    nextPath.add(id);
    current.parents = (parentsByChild.get(id) || []).map(parent => ancestorEntries(parent.id, depth + 1, maxDepth, parent.type, nextPath)).filter(Boolean);
    return current;
  }

  function treeItemMarkup(entry) {
    const person = entry.person;
    const children = entry.parents.length ? `<ul>${entry.parents.map(treeItemMarkup).join('')}</ul>` : '';
    return `<li><button class="tree-person-button" type="button" data-reroot="${person.id}" data-current="${String(person.id === focusId)}" data-relation="${entry.type}"><span>${entry.type === 'center' ? 'Center' : relationName(entry.type)}</span><strong>${escapeHtml(person.name)}</strong><small>${years(person)} · ${escapeHtml(person.place)}</small></button>${children}</li>`;
  }

  function flattenAncestors(entry, list = []) {
    if (!entry) return list;
    list.push(entry);
    entry.parents.forEach(parent => flattenAncestors(parent, list));
    return list;
  }

  function outlineMarkup(entry) {
    const person = entry.person;
    const parents = entry.parents.length
      ? `<ul>${entry.parents.map(outlineMarkup).join('')}</ul>`
      : '';
    return `<li><strong>${escapeHtml(person.name)}</strong>, ${years(person)}, ${escapeHtml(person.place)}${entry.type === 'center' ? ' — current center' : ` — ${relationName(entry.type)}`}${parents}</li>`;
  }

  function renderTree(entry) {
    const count = flattenAncestors(entry, []).length;
    familyStage.innerHTML = `<div class="stage-heading"><strong>Ancestry view centered on ${escapeHtml(entry.person.name)}</strong><span>${count} visible people · activate a person to change the focal person</span></div><div class="ancestor-scroll" tabindex="0" role="region" aria-label="Scrollable ancestor branch"><ul class="ancestor-tree">${treeItemMarkup(entry)}</ul></div>`;
  }

  const polar = (cx, cy, radius, angle) => {
    const radians = (angle - 90) * Math.PI / 180;
    return { x:cx + radius * Math.cos(radians), y:cy + radius * Math.sin(radians) };
  };

  function wedgePath(cx, cy, innerRadius, outerRadius, startAngle, endAngle) {
    const a = polar(cx, cy, innerRadius, startAngle);
    const b = polar(cx, cy, outerRadius, startAngle);
    const c = polar(cx, cy, outerRadius, endAngle);
    const d = polar(cx, cy, innerRadius, endAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} L ${b.x.toFixed(2)} ${b.y.toFixed(2)} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${c.x.toFixed(2)} ${c.y.toFixed(2)} L ${d.x.toFixed(2)} ${d.y.toFixed(2)} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${a.x.toFixed(2)} ${a.y.toFixed(2)} Z`;
  }

  function fanLevels(id, maxDepth) {
    const levels = [[{ id, type:'center' }]];
    for (let depth = 1; depth < maxDepth; depth += 1) {
      const next = [];
      levels[depth - 1].forEach(slot => {
        const parents = slot && slot.id ? (parentsByChild.get(slot.id) || []) : [];
        next.push(parents[0] || null, parents[1] || null);
      });
      levels.push(next);
    }
    return levels;
  }

  function renderFan(entry, maxDepth) {
    const cx = 320;
    const cy = 320;
    const levels = fanLevels(entry.person.id, maxDepth);
    const parts = [`<circle class="fan-center" cx="${cx}" cy="${cy}" r="48"></circle><text class="fan-name center-name" x="${cx}" y="${cy - 2}">${escapeHtml(firstName(entry.person))}</text><text class="fan-years center-name" x="${cx}" y="${cy + 15}">${years(entry.person)}</text>`];

    for (let generation = 1; generation < levels.length; generation += 1) {
      const slots = levels[generation];
      const innerRadius = 52 + (generation - 1) * 57;
      const outerRadius = 52 + generation * 57;
      const segmentAngle = 360 / slots.length;
      slots.forEach((slot, index) => {
        const start = index * segmentAngle;
        const end = start + segmentAngle;
        const relation = slot?.type || 'unknown';
        parts.push(`<path class="fan-segment" data-relation="${relation}" d="${wedgePath(cx, cy, innerRadius, outerRadius, start, end)}"></path>`);
        if (!slot?.id) return;
        const person = peopleById.get(slot.id);
        const position = polar(cx, cy, (innerRadius + outerRadius) / 2, start + segmentAngle / 2);
        const fontSize = generation >= 4 ? 8 : generation === 3 ? 9 : 11;
        parts.push(`<text class="fan-name" style="font-size:${fontSize}px" x="${position.x.toFixed(2)}" y="${position.y.toFixed(2)}">${escapeHtml(firstName(person))}</text>`);
      });
    }

    const described = levels.flat().filter(slot => slot?.id).map(slot => peopleById.get(slot.id).name);
    familyStage.innerHTML = `<div class="stage-heading"><strong>Radial ancestry centered on ${escapeHtml(entry.person.name)}</strong><span>${described.length} visible people · empty sectors indicate unknown information</span></div><div class="fan-wrap"><svg class="fan-svg" viewBox="0 0 640 640" role="img" aria-labelledby="fan-title fan-desc"><title id="fan-title">Ancestor fan centered on ${escapeHtml(entry.person.name)}</title><desc id="fan-desc">${escapeHtml(described.join(', '))}. Dashed sectors are adoptive relationships and empty sectors represent unknown information.</desc>${parts.join('')}</svg></div>`;
  }

  function buildAdjacency() {
    const adjacency = new Map(people.map(person => [person.id, []]));
    parentage.forEach(([parent, child, type]) => {
      adjacency.get(parent).push({ id:child, type, label:type === 'adoptive' ? 'adoptive parent of' : 'birth parent of' });
      adjacency.get(child).push({ id:parent, type, label:type === 'adoptive' ? 'adoptive child of' : 'birth child of' });
    });
    partnerships.forEach(([a, b]) => {
      adjacency.get(a).push({ id:b, type:'partner', label:'partner of' });
      adjacency.get(b).push({ id:a, type:'partner', label:'partner of' });
    });
    return adjacency;
  }

  const adjacency = buildAdjacency();

  function neighborhood(startId, maxDistance) {
    const found = new Map([[startId, 0]]);
    const queue = [startId];
    while (queue.length) {
      const current = queue.shift();
      const distance = found.get(current);
      if (distance >= maxDistance) continue;
      adjacency.get(current).forEach(edge => {
        if (!found.has(edge.id)) {
          found.set(edge.id, distance + 1);
          queue.push(edge.id);
        }
      });
    }
    return found;
  }

  function renderTimeline(entry, maxDepth) {
    const visible = neighborhood(entry.person.id, maxDepth - 1);
    const list = [...visible.keys()].map(id => peopleById.get(id)).sort((a, b) => a.born - b.born || a.name.localeCompare(b.name));
    const startYear = 1870;
    const endYear = 2030;
    const total = endYear - startYear;
    const ticks = [1870,1890,1910,1930,1950,1970,1990,2010];
    const rows = list.map(person => {
      const end = person.died || endYear;
      const startPercent = Math.max(0, ((person.born - startYear) / total) * 100);
      const widthPercent = Math.max(1, ((Math.min(end, endYear) - person.born) / total) * 100);
      return `<div class="timeline-row"><span class="timeline-name">${escapeHtml(person.name)}</span><div class="life-track"><span class="life-bar" style="--life-start:${startPercent.toFixed(2)}%;--life-width:${widthPercent.toFixed(2)}%" title="${years(person)}"></span></div></div>`;
    }).join('');
    familyStage.innerHTML = `<div class="stage-heading"><strong>Lifeline timeline centered on ${escapeHtml(entry.person.name)}</strong><span>${list.length} people within ${maxDepth - 1} relationship steps</span></div><div class="timeline-scroll" tabindex="0" role="region" aria-label="Scrollable family lifeline timeline"><div class="timeline-chart"><div class="timeline-axis"><span>Person</span>${ticks.map(tick => `<span>${tick}</span>`).join('')}</div>${rows}</div></div>`;
  }

  const networkPositions = {
    oskar:[170,55], alva:[300,55], samir:[485,55], ruth:[615,55],
    theo:[100,165], leona:[250,165], august:[520,165], clara:[690,165],
    kenji:[160,280], sofia:[310,280], nora:[540,280], ren:[700,280],
    noor:[220,395], mira:[370,395], edda:[620,395], liv:[295,500]
  };

  function renderNetwork(entry, maxDepth) {
    const visible = neighborhood(entry.person.id, maxDepth - 1);
    const visibleIds = new Set(visible.keys());
    const edgeParts = [];
    parentage.forEach(([parent, child, type]) => {
      if (!visibleIds.has(parent) || !visibleIds.has(child)) return;
      const a = networkPositions[parent];
      const b = networkPositions[child];
      edgeParts.push(`<line class="network-edge" data-type="${type}" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"><title>${escapeHtml(peopleById.get(parent).name)} is ${type === 'adoptive' ? 'an adoptive' : 'a birth'} parent of ${escapeHtml(peopleById.get(child).name)}</title></line>`);
    });
    partnerships.forEach(([aId, bId]) => {
      if (!visibleIds.has(aId) || !visibleIds.has(bId)) return;
      const a = networkPositions[aId];
      const b = networkPositions[bId];
      edgeParts.push(`<line class="network-edge" data-type="partner" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"><title>${escapeHtml(peopleById.get(aId).name)} and ${escapeHtml(peopleById.get(bId).name)} are partners</title></line>`);
    });
    const nodeParts = [...visibleIds].map(id => {
      const person = peopleById.get(id);
      const position = networkPositions[id];
      return `<g class="network-node" data-current="${String(id === focusId)}" transform="translate(${position[0]} ${position[1]})"><circle r="29"><title>${escapeHtml(person.name)}, ${years(person)}, ${escapeHtml(person.place)}</title></circle><text y="4">${escapeHtml(firstName(person))}</text></g>`;
    });
    familyStage.innerHTML = `<div class="stage-heading"><strong>Relationship network centered on ${escapeHtml(entry.person.name)}</strong><span>${visibleIds.size} people · line patterns identify relationship type</span></div><div class="network-scroll" tabindex="0" role="region" aria-label="Scrollable family relationship network"><svg class="network-svg" viewBox="0 0 860 540" role="img" aria-labelledby="network-title network-desc"><title id="network-title">Relationship network centered on ${escapeHtml(entry.person.name)}</title><desc id="network-desc">A network of ${visibleIds.size} fictional people. Solid lines show birth parentage, dashed lines show adoptive parentage, and double dotted lines show partnerships.</desc>${edgeParts.join('')}${nodeParts.join('')}</svg></div>`;
  }

  function renderOutline(entry, maxDepth) {
    if (activeView === 'tree' || activeView === 'fan') {
      familyOutline.innerHTML = `<p><strong>${escapeHtml(entry.person.name)}</strong> is the center. Nested items are parent relationships.</p><ul>${outlineMarkup(entry)}</ul>`;
      return;
    }
    const visible = neighborhood(entry.person.id, maxDepth - 1);
    const relations = [];
    parentage.forEach(([parent, child, type]) => {
      if (visible.has(parent) && visible.has(child)) relations.push(`<li>${escapeHtml(peopleById.get(parent).name)} is ${type === 'adoptive' ? 'an adoptive' : 'a birth'} parent of ${escapeHtml(peopleById.get(child).name)}.</li>`);
    });
    partnerships.forEach(([a, b]) => {
      if (visible.has(a) && visible.has(b)) relations.push(`<li>${escapeHtml(peopleById.get(a).name)} and ${escapeHtml(peopleById.get(b).name)} are partners.</li>`);
    });
    familyOutline.innerHTML = `<p><strong>${visible.size} visible people</strong> around ${escapeHtml(entry.person.name)}.</p><ul>${relations.join('')}</ul>`;
  }

  function renderFamily(announce = true) {
    const maxDepth = Number(generationRange.value);
    generationOutput.value = String(maxDepth);
    const entry = ancestorEntries(focusId, 1, maxDepth);
    if (activeView === 'tree') renderTree(entry);
    if (activeView === 'fan') renderFan(entry, maxDepth);
    if (activeView === 'timeline') renderTimeline(entry, maxDepth);
    if (activeView === 'network') renderNetwork(entry, maxDepth);
    renderOutline(entry, maxDepth);
    if (announce) {
      const viewName = viewButtons.find(button => button.dataset.view === activeView).querySelector('span').textContent;
      familyStatus.textContent = `${viewName} centered on ${entry.person.name}. ${maxDepth} generations shown.`;
    }
  }

  viewButtons.forEach(button => button.addEventListener('click', () => {
    activeView = button.dataset.view;
    viewButtons.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
    renderFamily(true);
  }));

  focusSelect.addEventListener('change', () => {
    focusId = focusSelect.value;
    renderFamily(true);
  });

  generationRange.addEventListener('input', () => renderFamily(false));
  generationRange.addEventListener('change', () => renderFamily(true));

  familyStage.addEventListener('click', event => {
    const button = event.target.closest('[data-reroot]');
    if (!button) return;
    focusId = button.dataset.reroot;
    focusSelect.value = focusId;
    renderFamily(true);
    familyStage.querySelector(`[data-reroot="${focusId}"]`)?.focus();
  });

  const pathFrom = document.getElementById('path-from');
  const pathTo = document.getElementById('path-to');
  const showPath = document.getElementById('show-path');
  const relationshipResult = document.getElementById('relationship-result');
  pathFrom.innerHTML = optionMarkup;
  pathTo.innerHTML = optionMarkup;
  pathFrom.value = 'mira';
  pathTo.value = 'edda';

  function findPath(start, end) {
    if (start === end) return { nodes:[start], edges:[] };
    const queue = [start];
    const previous = new Map([[start, null]]);
    const previousEdge = new Map();
    while (queue.length) {
      const current = queue.shift();
      for (const edge of adjacency.get(current)) {
        if (previous.has(edge.id)) continue;
        previous.set(edge.id, current);
        previousEdge.set(edge.id, edge);
        if (edge.id === end) {
          const nodes = [end];
          const edges = [];
          let cursor = end;
          while (cursor !== start) {
            edges.unshift(previousEdge.get(cursor));
            cursor = previous.get(cursor);
            nodes.unshift(cursor);
          }
          return { nodes, edges };
        }
        queue.push(edge.id);
      }
    }
    return null;
  }

  function renderRelationship() {
    const route = findPath(pathFrom.value, pathTo.value);
    if (!route) {
      relationshipResult.innerHTML = '<strong>No route found</strong><p>The current dataset contains no connection between these people.</p>';
      return;
    }
    const startName = peopleById.get(route.nodes[0]).name;
    const endName = peopleById.get(route.nodes[route.nodes.length - 1]).name;
    if (route.nodes.length === 1) {
      relationshipResult.innerHTML = `<h4 class="path-heading">The selected endpoints identify the same person: ${escapeHtml(startName)}.</h4>`;
      return;
    }
    const sequence = [];
    route.nodes.forEach((id, index) => {
      const person = peopleById.get(id);
      sequence.push(`<span class="path-person"><strong>${escapeHtml(person.name)}</strong><small>${years(person)} · ${escapeHtml(person.place)}</small></span>`);
      if (index < route.edges.length) sequence.push(`<span class="path-edge">${escapeHtml(route.edges[index].label)}</span>`);
    });
    const plainSteps = route.edges.map((edge, index) => `${peopleById.get(route.nodes[index]).name} is ${edge.label} ${peopleById.get(route.nodes[index + 1]).name}`).join('. ');
    relationshipResult.innerHTML = `<h4 class="path-heading">A ${route.edges.length}-step route from ${escapeHtml(startName)} to ${escapeHtml(endName)}</h4><div class="relationship-path">${sequence.join('')}</div><p>${escapeHtml(plainSteps)}.</p>`;
  }

  showPath.addEventListener('click', renderRelationship);
  renderFamily(false);
  renderRelationship();
})();
