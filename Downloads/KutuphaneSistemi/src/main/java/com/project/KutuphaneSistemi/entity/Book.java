package com.project.KutuphaneSistemi.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="book")
public class Book {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="book_id")
	private int bookId;
	
	@Column(name="book_name")
	private String bookName;
	
	@Column(name="book_author")
	private String bookAuthor;
	
	@DateTimeFormat(pattern="dd/MM/yyyy")
	@Column(name="start_date")
	private Date startDate;
	
	@DateTimeFormat(pattern="dd/MM/yyyy")
	@Column(name="end_date")
	private Date endDate;
	
	@ManyToOne(cascade= {CascadeType.PERSIST,CascadeType.MERGE,
			CascadeType.DETACH,CascadeType.REFRESH })
	@JoinColumn(name="user_id")
	private User user;

	public Book(String bookName, String bookAuthor, Date startDate, Date endDate) {
		super();
		this.bookName = bookName;
		this.bookAuthor = bookAuthor;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	
	public int getBookId() {
		return bookId;
	}


	public void setBookId(int bookId) {
		this.bookId = bookId;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookAuthor() {
		return bookAuthor;
	}

	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}


	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", bookName=" + bookName + ", bookAuthor=" + bookAuthor + ", startDate="
				+ startDate + ", endDate=" + endDate + "]";
	}
	
	

	
}
