package app.goldbach.cvmanagerbackend.controller.publicapi;

import app.goldbach.cvmanagerbackend.dto.publicapi.PublicProjectDto;
import app.goldbach.cvmanagerbackend.mapping.ProjectMapper;
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
    
    @GetMapping
    public List<PublicProjectDto> getAllProjects() {
        return ProjectMapper.INSTANCE.toPublicDtos(projectService.getAllProjects());
    }
}
