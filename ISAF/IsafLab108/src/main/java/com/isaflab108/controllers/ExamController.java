package com.isaflab108.controllers;

import com.isaflab108.model.Exam;
import com.isaflab108.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ExamController {

    @Autowired
    private ExamService examService;

    // Display all exams
    @GetMapping("/exams")
    public String getAllExams(Model model) {
        model.addAttribute("exams", examService.getAllExams());
        return "exams";
    }

    // View details of a specific exam
    @GetMapping("/exams/{id}")
    public String getExamDetails(@PathVariable("id") Long id, Model model) {
        Exam exam = examService.getExamById(id);
        model.addAttribute("exam", exam);
        return "exam-details";
    }

    // Edit exam page
    @GetMapping("/exams/{id}/edit")
    public String editExamForm(@PathVariable("id") Long id, Model model) {
        Exam exam = examService.getExamById(id);
        model.addAttribute("exam", exam);
        return "edit-exam";
    }

    // Submit updated exam details
    @PostMapping("/exams/{id}/edit")
    public String updateExam(@PathVariable("id") Long id, Exam updatedExam) {
        examService.updateExam(id, updatedExam);
        return "redirect:/exams";
    }

    // Back to home page
    @GetMapping("/")
    public String goToHome() {
        return "home";
    }
}
