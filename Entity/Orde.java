package com.example.demo.Entity;


import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Orde {
@Id
private int orderid;
private String orderdetails;
private double orderdiscounts;
private double totalamount;
public Orde() {
	super();
}
public Orde(int orderid, String orderdetails,double orderdiscounts,double totalamount) {
	super();
	this.orderid = orderid;
	this.orderdetails = orderdetails;
	this.orderdiscounts = orderdiscounts;
	this.totalamount = totalamount;
}
public int getOrderid() {
	return orderid;
}
public void setOrderid(int orderid) {
	this.orderid = orderid;
}
public String getOrderdetails() {
	return orderdetails;
}
public void setOrderdetails(String orderdetails) {
	this.orderdetails = orderdetails;
}
public double getOrderdiscounts() {
	return orderdiscounts;
}
public void setOrderdiscounts(double orderdiscounts) {
	this.orderdiscounts = orderdiscounts;
}
public double getTotalamount() {
	return totalamount;
}
public void setTotalamount(double totalamount) {
	this.totalamount = totalamount;
}

}
