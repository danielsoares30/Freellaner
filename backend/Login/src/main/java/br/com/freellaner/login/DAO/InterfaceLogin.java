package br.com.freellaner.login.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.freellaner.login.model.Login;

import java.util.Optional;

public interface InterfaceLogin extends CrudRepository<Login, Integer>{
    public Optional<Login> findByEmail(String email);
}
