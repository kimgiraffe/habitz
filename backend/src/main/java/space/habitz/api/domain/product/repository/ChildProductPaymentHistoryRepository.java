package space.habitz.api.domain.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import space.habitz.api.domain.product.entity.ChildProductPaymentHistory;

@Repository
public interface ChildProductPaymentHistoryRepository extends JpaRepository<ChildProductPaymentHistory, Long> {
}
