package com.bezkoder.springjwt.repository;

import org.springframework.data.repository.CrudRepository;

import com.bezkoder.springjwt.models.ConfirmationToken;

public interface ConfirmationTokenRepository extends CrudRepository<ConfirmationToken, String> {
	ConfirmationToken findByConfirmationToken(String confirmationToken);
}
