package org.ucr225.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.ucr225.model.AppRecord;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppRecordRepository extends JpaRepository<AppRecord,Integer> {

}
