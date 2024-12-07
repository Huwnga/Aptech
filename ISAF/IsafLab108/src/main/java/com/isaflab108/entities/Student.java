package com.isaflab108.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "students")
public class Student {
    @Id
    private String rollNo;

    private String fullName;

    @Column(name = "class_name")
    private String className;
}
