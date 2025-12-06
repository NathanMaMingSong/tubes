package main.java.org.unpar.project.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import main.java.org.unpar.project.Service.userService;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private userService userService;
    
}

