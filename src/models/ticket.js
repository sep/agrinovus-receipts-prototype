export const mkTicket = ({ pathLong, pathShort }) => ({
  pathLong,
  pathShort,
});

export const addTicketByPath = (map, ticket) => {
  map.set(ticket.pathLong, ticket);
  return map;
};

export const addNewTicketByPath = (map, path, index) => {
  const ticket = mkTicket({ pathLong: path, pathShort: index });
  map.set(path, ticket);
  return map;
};

export const getStaticTickets = async () => {
  const tickets = require.context('@/assets/tickets/', true, /\.png$/);
  return tickets.keys().map((key) => mkTicket({
    pathLong: tickets(key),
    pathShort: key,
  }));
};

export const getUploadedTickets = async () => {
  const tickets = JSON.parse(localStorage.getItem('uploadedImages')) || [];
  return tickets.map((ticket, index) => mkTicket({
    pathLong: ticket,
    pathShort: index,
  }));
};

export const uploadTickets = async (tickets) => {
  const uploadedTickets = await getUploadedTickets();

  const existingTickets = uploadedTickets.reduce(addTicketByPath, new Map());

  const newTickets = tickets.reduce(addNewTicketByPath, existingTickets);

  const ticketPaths = Array.from(tickets.values().map((ticket) => ticket.pathLong));

  localStorage.setItem('uploadedImages', ticketPaths);

  return newTickets;
};

export const getAllTickets = async () => {
  const staticTickets = await getStaticTickets();
  const uploadedTickets = await getUploadedTickets();
  return Array.concat(staticTickets, uploadedTickets);
};
