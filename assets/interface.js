const projects = [
  { id: 1, name: 'Projet Alpha', status: 'En cours' },
  { id: 2, name: 'Projet Beta', status: 'Terminé' },
  { id: 3, name: 'Projet Gamma', status: 'En attente' },
  { id: 4, name: 'Projet Delta', status: 'En cours' },
  { id: 5, name: 'Projet Epsilon', status: 'Terminé' },
  { id: 6, name: 'Projet Zeta', status: 'En cours' },
  { id: 7, name: 'Projet Eta', status: 'En cours' },
  { id: 8, name: 'Projet Theta', status: 'En attente' },
  { id: 9, name: 'Projet Iota', status: 'Terminé' },
  { id: 10, name: 'Projet Kappa', status: 'En cours' }
];

const rowsPerPage = 5;
let currentPage = 1;
let filtered = projects;

function renderTable() {
  const table = document.getElementById('project-table');
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const rows = filtered.slice(start, end).map(p => `
    <tr class="border-b hover:bg-sky-100">
      <td class="p-2"><a href="projet.html" class="text-sky-600 hover:underline">${p.name}</a></td>
      <td class="p-2">${p.status}</td>
      <td class="p-2 space-x-2">
        <a href="projet.html" class="text-sky-600" title="Voir"><i class="fa-solid fa-eye"></i></a>
        <a href="#" class="text-green-600" title="Éditer"><i class="fa-solid fa-pen-to-square"></i></a>
        <a href="#" class="text-red-600" title="Supprimer"><i class="fa-solid fa-trash"></i></a>
      </td>
    </tr>
  `).join('');
  table.innerHTML = rows;

  document.getElementById('page-info').textContent = `Page ${currentPage} / ${Math.max(1, Math.ceil(filtered.length / rowsPerPage))}`;
  document.getElementById('prev').disabled = currentPage === 1;
  document.getElementById('next').disabled = end >= filtered.length;
}

function applyFilter(value) {
  filtered = projects.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
  currentPage = 1;
  renderTable();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search').addEventListener('input', e => applyFilter(e.target.value));
  document.getElementById('prev').addEventListener('click', () => { if (currentPage > 1) { currentPage--; renderTable(); } });
  document.getElementById('next').addEventListener('click', () => { if ((currentPage * rowsPerPage) < filtered.length) { currentPage++; renderTable(); } });
  renderTable();
});
