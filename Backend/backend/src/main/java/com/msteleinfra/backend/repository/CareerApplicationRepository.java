package com.msteleinfra.backend.repository;

import com.msteleinfra.backend.entity.CareerApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareerApplicationRepository extends JpaRepository<CareerApplication, Long> {
}