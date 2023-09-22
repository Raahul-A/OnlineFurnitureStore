package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Description {
@Id
private int desid;
private String desdetails;
public Description(int desid, String desdetails) {
	super();
	this.desid = desid;
	this.desdetails = desdetails;
}
public Description() {
	super();
}
public int getDesid() {
	return desid;
}
public void setDesid(int desid) {
	this.desid = desid;
}
public String getDesdetails() {
	return desdetails;
}
public void setDesdetails(String desdetails) {
	this.desdetails = desdetails;
}
}
