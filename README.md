<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.0`
* __Run:__ Mon Mar 09 2026 01:54:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 46621.6    | 20.95        | 8.31          |
| bare                     | v20.20.0 | ✗      | 46129.6    | 21.17        | 8.23          |
| kita                     | 1.1.36   | ✓      | 45484.8    | 21.49        | 8.15          |
| server-base-router       | 7.1.32   | ✓      | 45261.6    | 21.58        | 8.07          |
| fastify                  | 4.29.1   | ✓      | 45203.2    | 21.62        | 8.10          |
| server-base              | 7.1.32   | ✗      | 44850.4    | 21.81        | 8.00          |
| connect                  | 3.7.0    | ✗      | 44023.8    | 22.23        | 7.85          |
| polkadot                 | 1.0.0    | ✗      | 43898.4    | 22.29        | 7.83          |
| rayo                     | 1.4.6    | ✓      | 43745.6    | 22.36        | 7.80          |
| 0http                    | 3.5.3    | ✓      | 42588.8    | 22.98        | 7.60          |
| connect-router           | 1.3.8    | ✓      | 41899.2    | 23.38        | 7.47          |
| h3-router                | 1.15.6   | ✓      | 40337.6    | 24.29        | 7.19          |
| h3                       | 1.15.6   | ✗      | 40051.2    | 24.47        | 7.14          |
| restana                  | 4.9.9    | ✓      | 39381.4    | 24.90        | 7.02          |
| koa                      | 2.16.4   | ✗      | 36809.0    | 26.66        | 6.56          |
| hono                     | 4.12.5   | ✓      | 35337.4    | 27.79        | 5.80          |
| restify                  | 11.1.0   | ✓      | 34997.0    | 28.07        | 6.31          |
| take-five                | 2.0.0    | ✓      | 34754.4    | 28.27        | 12.50         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34085.2    | 28.83        | 6.08          |
| koa-router               | 12.0.1   | ✓      | 32539.4    | 30.22        | 5.80          |
| hapi                     | 21.4.7   | ✓      | 31618.0    | 31.12        | 5.64          |
| fastify-big-json         | 4.29.1   | ✓      | 11774.8    | 84.36        | 135.46        |
| express                  | 4.22.1   | ✓      | 11178.0    | 88.88        | 1.99          |
| express-with-middlewares | 4.22.1   | ✓      | 10418.0    | 95.39        | 3.87          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
