package com.pocketpay.transaction.service;

import com.pocketpay.transaction.dto.RecipientDto;

import java.util.List;

public interface RecipientService {
    RecipientDto createRecipient(RecipientDto recipientDto);

    RecipientDto getRecipientById(Long id);

    List<RecipientDto> getAllRecipient();

}
