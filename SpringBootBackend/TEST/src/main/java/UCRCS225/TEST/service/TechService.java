package UCRCS225.TEST.service;

import UCRCS225.TEST.model.Tech;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TechService {
    List<Tech> findAll();
}
