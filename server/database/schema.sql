CREATE TABLE pizza (
    id INT AUTO_INCREMENT PRIMARY KEY not null,
    nom VARCHAR(255) NOT NULL unique,
    base VARCHAR(50) not null,
    ingredients VARCHAR(255) not null,
    photo VARCHAR(400) not null
);

INSERT INTO pizza (nom, base, ingredients, photo) VALUES
('Capricciosa', 'tomate', 'mozzarella, jambon, champignons, artichauts, olives', 'https://img.sunset02.com/sites/default/files/image/recipes/su/14/09/capricciosa-pizza-su-x.jpg'),
('Marinara', 'tomate', 'ail, origan, huile d\'olive', 'https://www.pizzarecipe.org/wp-content/uploads/2019/01/Pizza-Marinara-2000x1500.jpg'),
('Quattro Stagioni', 'tomate', 'mozzarella, jambon, champignons, artichauts, olives', 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A7B9D1B2-20CE-4D60-B18D-77D8E09F847A/Derivates/349C6F0F-E5E5-4327-9892-930DE2D8E89F.jpg'),
('Diavola', 'tomate', 'mozzarella, salami piquant', 'https://www.iffco.it/sites/default/files/styles/free_crop/public/img/recipe/gran-cucina-pizza-diavola.jpg?h=de92a0b7&itok=eC0EvTVI'),
('Prosciutto e Funghi', 'tomate', 'mozzarella, jambon, champignons', 'https://www.menu.it/media/ricette/pizza-prosciutto-e-funghi-68651/conversions/P079_Prosciutto-e-funghi-main.jpg'),
('Vegetarienne', 'tomate', 'mozzarella, poivrons, courgettes, aubergines, oignons', 'https://m.bettybossi.ch/static/rezepte/x/bb_nege080401_0038a_x.jpg'),
('Bolognaise', 'tomate', 'mozzarella, viande hachée, oignons', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fileauxepices.com%2Fblog%2F2015%2F05%2F27%2Frecette-pizza-bolognaise-maison%2Fwpid8583%2F&psig=AOvVaw0WW0yOBCgRga5WTfyWFBGB&ust=1719863292373000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjyqpiMhIcDFQAAAAAdAAAAABAE'),
('Regina', 'tomate', 'mozzarella, jambon, champignons', 'https://www.casa-pizza.com/images/photorecettes/pizza-regina-123rf.jpg'),
('Frutti di Mare', 'tomate', 'mozzarella, fruits de mer', 'https://www.tasteatlas.com/images/dishes/2475b8aa94c1463dbe9dc17e0f38a063.jpg'),
('Pescatore', 'tomate', 'mozzarella, thon, oignons, câpres', 'https://www.pizza-casa-nostra.fr/65-home_default/pizza-fruits-de-mer.jpg'),
('Calzone', 'tomate', 'mozzarella, jambon, ricotta', 'https://assets.afcdn.com/recipe/20161130/7916_w1024h1024c1cx2808cy1872.webp'),
('Fiorentina', 'creme', 'mozzarella, épinards, oeuf, parmesan', 'https://www.lunchbox.eu/wp-content/uploads/2022/02/Fiorentina-Pizza.jpg'),
('Parmigiana', 'creme', 'mozzarella, aubergines, parmesan, basilic', 'https://images.getrecipekit.com/20240130215811-eggplant-parmigiana-pizza.jpg?width=650&quality=90&'),
('Gorgonzola', 'creme', 'mozzarella, gorgonzola, noix', 'https://img.cuisineaz.com/660x660/2015/10/08/i36192-pizza-fromages.webp'),
('Al Funghi', 'creme', 'mozzarella, champignons, ail, persil', 'https://www.tasteatlas.com/images/dishes/08648360db374a7e939a0e5f19d8a7bd.jpg');
