import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    <section class="services" id="services">
      <h2>Nossos Serviços</h2>
      <div class="service-list">
        <div class="service-item" *ngFor="let service of services">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <button (click)="openModal(service)">Saiba Mais</button>
        </div>
      </div>
    </section>
    <app-modal
      *ngIf="selectedService"
      [title]="selectedService.title"
      [content]="selectedService.fullDescription"
      (close)="closeModal()"
    ></app-modal>
  `,
  styles: [`
    .services {
      padding: 80px 20px;
      background-color: #ecf0f1;
    }
    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 50px;
      font-size: 2.5em;
    }
    .service-list {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
    }
    .service-item {
      background-color: white;
      padding: 30px;
      margin: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      width: calc(33.33% - 30px);
      box-sizing: border-box;
      transition: transform 0.3s;
      display: flex;
      flex-direction: column;
    }
    .service-item:hover {
      transform: translateY(-5px);
    }
    .service-item h3 {
      color: #3498db;
      margin-bottom: 15px;
    }
    .service-item p {
      flex-grow: 1;
      margin-bottom: 20px;
    }
    .service-item button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      transition: background-color 0.3s;
    }
    .service-item button:hover {
      background-color: #2980b9;
    }
    @media (max-width: 768px) {
      .service-item {
        width: 100%;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      title: 'Consultoria',
      description: 'Oferecemos consultoria especializada para otimizar seus processos.',
      fullDescription: 'Nossa consultoria especializada ajuda a identificar áreas de melhoria em seus processos de negócio. Trabalhamos em estreita colaboração com sua equipe para desenvolver estratégias personalizadas que aumentam a eficiência, reduzem custos e impulsionam o crescimento. Com anos de experiência em diversos setores, podemos oferecer insights valiosos e soluções práticas para os desafios únicos do seu negócio.'
    },
    {
      title: 'Desenvolvimento',
      description: 'Criamos soluções personalizadas para atender às suas necessidades.',
      fullDescription: 'Nossa equipe de desenvolvimento altamente qualificada cria soluções de software personalizadas que atendem perfeitamente às necessidades específicas do seu negócio. Utilizamos as mais recentes tecnologias e melhores práticas de desenvolvimento para entregar produtos robustos, escaláveis e fáceis de manter. Seja um aplicativo móvel, um sistema web complexo ou uma solução de e-commerce, temos a experiência para transformar sua visão em realidade.'
    },
    {
      title: 'Suporte',
      description: 'Fornecemos suporte técnico 24/7 para garantir o sucesso do seu projeto.',
      fullDescription: 'Nosso suporte técnico está disponível 24 horas por dia, 7 dias por semana, para garantir que seus sistemas estejam sempre funcionando sem problemas. Nossa equipe de especialistas está pronta para resolver rapidamente qualquer problema que possa surgir, minimizando o tempo de inatividade e maximizando a produtividade. Oferecemos vários níveis de suporte para atender às suas necessidades específicas, desde assistência básica até gerenciamento completo de infraestrutura de TI.'
    }
  ];

  selectedService: any = null;

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}