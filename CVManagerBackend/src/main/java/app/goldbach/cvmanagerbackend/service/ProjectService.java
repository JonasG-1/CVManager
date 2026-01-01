package app.goldbach.cvmanagerbackend.service;

import app.goldbach.cvmanagerbackend.model.Project;
import app.goldbach.cvmanagerbackend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProjectService {
    
    private final ProjectRepository projectRepository;
    
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public void createProject(Project project) {
        project.setId(null);
        
        projectRepository.save(project);
        log.info("Project created: {}", project);
    }
}

