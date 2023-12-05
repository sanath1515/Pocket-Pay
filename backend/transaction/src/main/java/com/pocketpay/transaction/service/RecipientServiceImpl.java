package com.pocketpay.transaction.service;

import com.pocketpay.transaction.dto.RecipientDto;
import com.pocketpay.transaction.entity.Recipient;
import com.pocketpay.transaction.exception.NotFoundException;
import com.pocketpay.transaction.repository.RecipientRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RecipientServiceImpl implements RecipientService {

    @Autowired
    private RecipientRepository recipientRepository;

    private ModelMapper modelMapper;

    public RecipientServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public RecipientDto createRecipient(RecipientDto recipientDto) {
        Recipient recipient = modelMapper.map(recipientDto, Recipient.class);
        Recipient savedRecipient = recipientRepository.save(recipient);
        return modelMapper.map(savedRecipient, RecipientDto.class);
    }

    @Override
    public RecipientDto getRecipientById(Long id) {
        Optional<Recipient> recipient = recipientRepository.findById(id);
        if (recipient.isPresent()) {
            return modelMapper.map(recipient.get(), RecipientDto.class);
        } else {
            throw new NotFoundException("Recipient not found with ID: " + id);
        }
    }

    @Override
    public List<RecipientDto> getAllRecipient() {
        List<Recipient> recipients = recipientRepository.findAll();
        return recipients.stream()
                .map(data -> modelMapper.map(data, RecipientDto.class))
                .collect(Collectors.toList());
    }
}
