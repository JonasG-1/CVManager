package app.goldbach.cvmanagerbackend.controller.publicapi;

import app.goldbach.cvmanagerbackend.mapping.publicapi.PublicProjectMapper;
import app.goldbach.cvmanagerbackend.model.Project;
import app.goldbach.cvmanagerbackend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/projects")
@RequiredArgsConstructor
public class PublicProjectController {

    private final ProjectService projectService;
    private final PublicProjectMapper projectMapper;
    
    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }
}
