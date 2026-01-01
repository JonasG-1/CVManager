package app.goldbach.cvmanagerbackend.controller.privateapi;

import app.goldbach.cvmanagerbackend.dto.privateapi.PrivateProjectDto;
import app.goldbach.cvmanagerbackend.mapping.ProjectMapper;
import app.goldbach.cvmanagerbackend.model.Project;
import app.goldbach.cvmanagerbackend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/private/projects")
@RequiredArgsConstructor
public class PrivateProjectController {

    private final ProjectService projectService;
    @PostMapping
    public ResponseEntity<Void> addProject(@RequestBody PrivateProjectDto privateProjectDto) {
        Project project = ProjectMapper.INSTANCE.toEntity(privateProjectDto);
        
        projectService.createProject(project);
        return ResponseEntity.ok().build();
    }
}
