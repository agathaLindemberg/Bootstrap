package io.github.agathaLindemberg.rest;

import io.github.agathaLindemberg.model.entity.Webtoon;
import io.github.agathaLindemberg.model.repository.WebtoonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/webtoon")
@CrossOrigin("http://localhost:4200")
public class WebtoonController {
    private final WebtoonRepository repository;

    @Autowired
    public WebtoonController(WebtoonRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Webtoon> obterTodos(){
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Webtoon save(@RequestBody @Valid Webtoon webtoon) {
        return repository.save(webtoon);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Webtoon findById(@PathVariable Integer id) {
        return repository
                .findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable Integer id,
                       @RequestBody Webtoon webtoonAtualizado) {
        repository
                .findById(id)
                .map(webtoon -> {
                    webtoonAtualizado.setId(webtoon.getId());
                    return repository.save(webtoonAtualizado);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
