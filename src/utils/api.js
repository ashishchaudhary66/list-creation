export const fetchLists = async () => {
  const res = await fetch('https://apis.ccbp.in/list-creation/lists');
  if (!res.ok) throw new Error('Failed to fetch');
  return await res.json();
};
