from django.core.management.base import BaseCommand

from donation.receipts import send_eofy_receipts


class Command(BaseCommand):
    help = 'Test EOFY receipts'

    def handle(self, *args, **options):
        send_eofy_receipts(test=True)