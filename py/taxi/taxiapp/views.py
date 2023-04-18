from .serializer import *
from rest_framework import viewsets
from .serializer import taxiMoSerializer
from .models import taxiMo
from rest_framework import filters
from django.db.models.functions import ExtractMonth, ExtractYear



class taxiMoViewSet(viewsets.ModelViewSet):
    queryset = taxiMo.objects.all()
    serializer_class = taxiMoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['date']

    def get_queryset(self):
        queryset = super().get_queryset()
        month = self.request.query_params.get('month')
        year = self.request.query_params.get('year')
        if month and year:
            queryset = queryset.annotate(
                month=ExtractMonth('date'),
                year=ExtractYear('date')
            ).filter(month=month, year=year)

        return queryset