CREATE TABLE pizza (
    id INT AUTO_INCREMENT PRIMARY KEY not null,
    nom VARCHAR(255) NOT NULL unique,
    base VARCHAR(50) not null,
    ingredients VARCHAR(255) not null,
    photo VARCHAR(255) not null
);

INSERT INTO pizza (nom, base, ingredients, photo) VALUES
('Capricciosa', 'tomate', 'mozzarella, jambon, champignons, artichauts, olives', 'capricciosa.jpg'),
('Marinara', 'tomate', 'ail, origan, huile d\'olive', 'marinara.jpg'),
('Quattro Stagioni', 'tomate', 'mozzarella, jambon, champignons, artichauts, olives', 'quattro_stagioni.jpg'),
('Diavola', 'tomate', 'mozzarella, salami piquant', 'diavola.jpg'),
('Prosciutto e Funghi', 'tomate', 'mozzarella, jambon, champignons', 'prosciutto_funghi.jpg'),
('Vegetarienne', 'tomate', 'mozzarella, poivrons, courgettes, aubergines, oignons', 'vegetarienne.jpg'),
('Bolognaise', 'tomate', 'mozzarella, viande hachée, oignons', 'bolognaise.jpg'),
('Regina', 'tomate', 'mozzarella, jambon, champignons', 'regina.jpg'),
('Frutti di Mare', 'tomate', 'mozzarella, fruits de mer', 'frutti_di_mare.jpg'),
('Pescatore', 'tomate', 'mozzarella, thon, oignons, câpres', 'pescatore.jpg'),
('Calzone', 'tomate', 'mozzarella, jambon, ricotta', 'calzone.jpg'),
('Fiorentina', 'creme', 'mozzarella, épinards, oeuf, parmesan', 'fiorentina.jpg'),
('Parmigiana', 'creme', 'mozzarella, aubergines, parmesan, basilic', 'parmigiana.jpg'),
('Gorgonzola', 'creme', 'mozzarella, gorgonzola, noix', 'gorgonzola.jpg'),
('Al Funghi', 'creme', 'mozzarella, champignons, ail, persil', 'al_funghi.jpg');
