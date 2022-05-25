package com.anupama.sinha.dao;

import java.io.IOException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * Classe responsável pela configuração do banco de dados
 *
 */
public class ConnectionFactory {

    //Objetos
    private static EntityManagerFactory factory = null;

    static {
        try {

            init();
        } catch (IOException ex) {

        }
    }

    /**
     * Método responsável pela inicializaçaõ do banco de dados
 
     */
    private static void init() throws IOException {

        try {

            factory = Persistence.createEntityManagerFactory("...");

        } catch (Exception e) {

        }

    }

    public static EntityManager getEntityManager() {
        return factory.createEntityManager();
    }

}
