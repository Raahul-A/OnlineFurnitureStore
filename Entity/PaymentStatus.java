package com.example.demo.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PaymentStatus {
@Id
private int paymentid;
private String statusofpayment;
private String method;
public PaymentStatus() {
	super();
}
public PaymentStatus(int paymentid, String statusofpayment, String method) {
	super();
	this.paymentid = paymentid;
	this.statusofpayment = statusofpayment;
	this.method = method;
}
public int getPaymentid() {
	return paymentid;
}
public void setPaymentid(int paymentid) {
	this.paymentid = paymentid;
}
public String getStatusofpayment() {
	return statusofpayment;
}
public void setStatusofpayment(String statusofpayment) {
	this.statusofpayment = statusofpayment;
}
public String getMethod() {
	return method;
}
public void setMethod(String method) {
	this.method = method;
}

}
