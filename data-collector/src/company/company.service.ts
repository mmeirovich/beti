import { Injectable } from '@nestjs/common';
import { CompanyDto } from 'src/dto/company.dto';

@Injectable()
export class CompanyService {
  async getAllCompanies(): CompanyDto[] {
    try {
      const companies: CompanyDto[];
      // the best here is to call another service that gets all companies from the database
      // if we want to develop quickly, we can query the database itself from here

      return companies;
    } catch (error) {}
  }
}
