from .models import *
from rest_framework import serializers


class RegistrationSerializer(serializers.ModelSerializer):

    password2 				= serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = MyUser
        fields = ['email', 'password', 'password2','phone_number']
        extra_kwargs = {
                'password': {'write_only': True},
        }
    def	save(self):
        user = MyUser(
                    email=self.validated_data['email'],
                    phone_number=self.validated_data['phone_number'],
                    )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        user.set_password(password)
        user.save()
        return user


