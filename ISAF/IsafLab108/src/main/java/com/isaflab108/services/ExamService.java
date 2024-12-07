package com.isaflab108.services;

import com.isaflab108.model.Exam;
import com.isaflab108.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {

    @Autowired
    private ExamRepository examRepository;

    public List<Exam> getAllExams() {
        return examRepository.findAll();
    }

    public Exam getExamById(Long id) {
        return examRepository.findById(id).orElseThrow(() -> new RuntimeException("Exam not found!"));
    }

    public void updateExam(Long id, Exam updatedExam) {
        Exam existingExam = getExamById(id);
        existingExam.setName(updatedExam.getName());
        existingExam.setDuration(updatedExam.getDuration());
        existingExam.setDescription(updatedExam.getDescription());
        examRepository.save(existingExam);
    }
}
