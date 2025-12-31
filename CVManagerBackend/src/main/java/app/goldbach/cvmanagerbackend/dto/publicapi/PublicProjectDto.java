package app.goldbach.cvmanagerbackend.dto.publicapi;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * DTO for {@link app.goldbach.cvmanagerbackend.model.Project}
 */
public record PublicProjectDto(Long id, String name, String description, String link, LocalDate startDate,
                               LocalDate endDate) implements Serializable {
}