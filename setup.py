from setuptools import find_packages, setup

__version__ = '0.1.0'
__description__ = 'APP para match de filmes'
__long_description__ = 'README.md'

__author__ = 'Anne Carvalho, Diego Della Rocca, Taís Christofani'
__author_email__ = 'anneisabelle.rodrigues@outlook.com'

setup(
    name='match_ur_date',
    version=__version__,
    author=__author__,
    author_email=__author_email__,
    packages=find_packages(),
    description=__description__,
    long_description=__long_description__,
    url='https://github.com/diegodrc/match-ur-date.git',
    keywords='API, MongoDB',
    include_package_data=True,
    zip_safe=False,
    classifiers=[
        'Intended Audience :: System Administrators',
        'Operating System :: OS Independent',
        'Topic :: Software Development',
        'Environment :: Web Environment',
        'Programming Language :: Python :: 3.6',
    ],
)