package app.goldbach.cvmanagerbackend.controller;

import app.goldbach.cvmanagerbackend.model.Project;
import app.goldbach.cvmanagerbackend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;
    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }
    
}
