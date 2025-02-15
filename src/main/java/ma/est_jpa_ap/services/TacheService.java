package ma.est_jpa_ap.services;

import ma.est_jpa_ap.entites.Categorie;
import ma.est_jpa_ap.entites.Tache;
import ma.est_jpa_ap.repositories.AdminRepository;
import ma.est_jpa_ap.repositories.CategorieRepository;
import ma.est_jpa_ap.repositories.TacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TacheService {

    @Autowired
    private TacheRepository tacheRepository;
    //ajouter nouvelle service
    public Tache addTache(String nom){
        Tache tache =new Tache();
        tache.setNom(nom);
        return  tacheRepository.save(tache);
    }
    //Modifer service
    public Tache updateTache(Long id,String nom){
        Tache tache= tacheRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("le sevice intruvable "));
        tache.setNom(nom);
        return tacheRepository.save(tache);
    }
    //Supprimer Service
    public  void deleteTache(Long id){
        if(!tacheRepository.existsById(id)){
            throw  new RuntimeException("Service introuvable");
        }
        tacheRepository.deleteById(id);
    }
    // Récupérer toutes les tâches
    public List<Tache> getAllTaches() {
        return tacheRepository.findAll();
    }

    // Récupérer une tâche par ID
    public Optional<Tache> getTacheById(Long id) {
        return tacheRepository.findById(id);
    }

}
