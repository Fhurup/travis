/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import entities.Movie;

/**
 *
 * @author fh
 */
public class MovieDTO {
    private Long id;
    private String title;
    private int year;
    private String [] actors;
    
    public MovieDTO(Movie m) {
        this.id = m.getId();
        this.title = m.getTitle();
        this.year = m.getYear();
        this.actors = m.getActors();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String[] getActors() {
        return actors;
    }

    public void setActors(String[] actors) {
        this.actors = actors;
    }
    
    
    
}
