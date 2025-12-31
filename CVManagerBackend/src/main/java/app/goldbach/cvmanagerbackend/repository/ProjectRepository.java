package app.goldbach.cvmanagerbackend.repository;

import app.goldbach.cvmanagerbackend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
