FROM public.ecr.aws/lambda/python:3.10

RUN pip3 install --upgrade pip
RUN pip3 install --no-cache-dir -U numpy --target "${LAMBDA_TASK_ROOT}"
RUN pip3 install --no-cache-dir -U lancedb --target "${LAMBDA_TASK_ROOT}"
RUN pip3 install --no-cache-dir -U pandas --target "${LAMBDA_TASK_ROOT}"

COPY app.py ${LAMBDA_TASK_ROOT}

CMD [ "app.handler" ]
