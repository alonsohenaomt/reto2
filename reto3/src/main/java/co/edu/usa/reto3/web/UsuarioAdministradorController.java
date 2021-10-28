/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.usa.reto3.web;

import co.edu.usa.reto3.modelo.UsuarioAdministrador;
import co.edu.usa.reto3.servicios.UsuarioAdministradorService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ivan
 */
@RestController
@RequestMapping("/api/Admin")
@CrossOrigin(origins="*", methods ={RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
public class UsuarioAdministradorController {
    @Autowired
    private UsuarioAdministradorService usuAdmnService;
    
    @GetMapping("/all")
    public List<UsuarioAdministrador> getAll(){
        return usuAdmnService.getAll();
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public UsuarioAdministrador save(@RequestBody UsuarioAdministrador usuAdmn){
        return usuAdmnService.save(usuAdmn);
    }
}
