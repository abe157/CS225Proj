package UCRCS225.TEST.service;

import UCRCS225.TEST.model.Tech;
import UCRCS225.TEST.repository.TechRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechServiceImpl implements TechService {

    @Autowired
    private TechRepository techRepository;

    @Override
    public List<Tech> findAll(){
        return techRepository.findAll();
    }

}
