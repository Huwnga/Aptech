package com.isaflab108.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "exam_attendance")
public class ExamAttendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "exam_id")
    private Exam exam;

    @ManyToOne
    @JoinColumn(name = "scheduler_id")
    private Scheduler scheduler;

    @ManyToOne
    @JoinColumn(name = "student_roll_no")
    private Student student;
}
