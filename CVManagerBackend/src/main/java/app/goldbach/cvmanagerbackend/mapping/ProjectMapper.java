package app.goldbach.cvmanagerbackend.mapping;

import app.goldbach.cvmanagerbackend.dto.privateapi.PrivateProjectDto;
import app.goldbach.cvmanagerbackend.dto.publicapi.PublicProjectDto;
import app.goldbach.cvmanagerbackend.model.Project;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface ProjectMapper {
    
    ProjectMapper INSTANCE = Mappers.getMapper(ProjectMapper.class);

    PublicProjectDto toPublicDto(Project project);

    List<PublicProjectDto> toPublicDtos(List<Project> projects);
    
    Project toEntity(PrivateProjectDto projectDto);
    
}
