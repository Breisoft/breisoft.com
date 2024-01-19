FROM python:3.9

ENV PYTHONUNBUFFERED 1

WORKDIR /backend

ADD requirements.txt /backend/
RUN pip install --upgrade pip && \
    pip install -r requirements.txt


COPY backend /backend/

CMD ["gunicorn", "breisoft_com.wsgi:application", "--bind", "0.0.0.0:8000"]
