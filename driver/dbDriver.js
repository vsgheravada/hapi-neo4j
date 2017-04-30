import Hapi from "hapi";
import neo4j from "neo4j-driver";
import dbConfig from "../config/dbConfig";

const {host, port, username, password} = dbConfig;

const driver = neo4j.driver(
	`bolt://${host}`,
	neo4j.auth.basic(username, password)
);

const session = driver.session();

const db = session.run("CREATE (n:User) RETURN n");
