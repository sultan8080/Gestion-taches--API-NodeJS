require('dotenv').config(); // Charge les variables d'environnement à partir du fichier .env

module.exports = {
  server: {
    // Port sur lequel le serveur va écouter
    port: process.env.PORT || 3000, // Par défaut, écoute sur le port 3000 si non défini dans .env
  },
  database: {
    // Informations de connexion à la base de données
    username: process.env.DB_USERNAME, // Nom d'utilisateur de la base de données
    password: process.env.DB_PASSWORD, // Mot de passe de la base de données
    database: process.env.DB_NAME,     // Nom de la base de données
    host: process.env.DB_HOST,         // Hôte de la base de données (par défaut 127.0.0.1 ou localhost)
    dialect: process.env.DB_DIALECT || 'postgres', // Type de base de données (par défaut PostgreSQL)
  }
};
