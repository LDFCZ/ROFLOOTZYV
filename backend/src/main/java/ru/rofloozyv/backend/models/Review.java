package ru.rofloozyv.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "Reviews")
public class Review {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @NotBlank
    @Size(max = 25)
    @Column(name = "review_name")
    private String reviewName;

    @NotBlank
    @Size(max = 50)
    @Column(name = "short_description")
    private String shortDescription;

    @NotBlank
    @Size(max = 1000)
    @Column(name = "full_description")
    private String fullDescription;

    @NotBlank
    @Size(max = 50)
    @Column(name = "grade")
    private String grade;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "review", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Comment> comments;
}
